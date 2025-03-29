import { User } from '@/types/user';
import { Edit2, Trash2 } from 'lucide-react';
import Button from './ui/Button';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="secondary"
            onClick={() => onEdit(user)}
            className="p-2"
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            variant="danger"
            onClick={() => onDelete(user.id)}
            className="p-2"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}