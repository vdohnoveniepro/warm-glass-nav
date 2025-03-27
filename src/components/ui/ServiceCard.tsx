
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  id: string;
  title: string;
  duration: string;
  price: string;
  specialist?: string;
  className?: string;
}

const ServiceCard = ({
  id,
  title,
  duration,
  price,
  specialist,
  className
}: ServiceCardProps) => {
  return (
    <Link
      to={`/services/${id}`}
      className={cn(
        "block w-full glass-card rounded-xl p-5 card-hover",
        className
      )}
    >
      <h3 className="text-lg font-semibold mb-2 text-warmgray-800">{title}</h3>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-warmgray-600">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="font-medium text-warmgray-800">{price} ₽</div>
      </div>
      
      {specialist && (
        <div className="flex items-center text-sm text-warmgray-600">
          <User className="w-4 h-4 mr-1" />
          <span>{specialist}</span>
        </div>
      )}
    </Link>
  );
};

export default ServiceCard;
