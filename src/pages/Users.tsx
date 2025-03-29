import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, LogOut } from 'lucide-react';
import { User, UserResponse } from '@/types/user';
import UserCard from '@/components/UserCard';
import EditUserModal from '@/components/EditUserModal';
import Button from '@/components/ui/Button';
import api from '@/lib/axios';
import toast from 'react-hot-toast';

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchUsers();
  }, [currentPage, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await api.get<UserResponse>(`/users?page=${currentPage}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      toast.error('Failed to fetch users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (updatedUser: User) => {
    try {
      await api.put(`/users/${updatedUser.id}`, updatedUser);
      setUsers(users.map((user) => 
        user.id === updatedUser.id ? updatedUser : user
      ));
      toast.success('User updated successfully');
    } catch (error) {
      toast.error('Failed to update user');
      throw error;
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <Button
            variant="secondary"
            onClick={handleLogout}
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onEdit={setEditingUser}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {!searchTerm && (
              <div className="mt-8 flex justify-center space-x-2">
                <Button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  variant="secondary"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={currentPage === totalPages}
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}

        {editingUser && (
          <EditUserModal
            user={editingUser}
            onClose={() => setEditingUser(null)}
            onSave={handleEdit}
          />
        )}
      </div>
    </div>
  );
}