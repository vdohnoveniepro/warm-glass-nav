
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/ui/ServiceCard';
import ArticleCard from '@/components/ui/ArticleCard';
import EventCard from '@/components/ui/EventCard';
import AnimatedButton from '@/components/ui/AnimatedButton';

const Index = () => {
  // Sample data
  const featuredServices = [
    { id: '1', title: 'Первая бесплатная консультация', duration: '30 мин', price: '0' },
    { id: '2', title: 'ВсеЛенская терапия', duration: '2 ч', price: '4000' },
    { id: '3', title: 'Таро', duration: '1 ч', price: '2500' },
  ];

  const upcomingEvents = [
    { 
      id: '1', 
      title: 'Вебинар по нумерологии', 
      date: '15 июня', 
      time: '19:00', 
      specialist: 'Анна Иванова' 
    }
  ];

  const popularArticles = [
    { 
      id: '1', 
      title: 'Как правильно начать регрессивную терапию', 
      excerpt: 'Узнайте основные принципы регрессивной терапии и как она может помочь вам раскрыть глубинные причины психологических блоков.', 
      author: 'Мария Петрова', 
      date: '10 июня' 
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="inline-block px-3 py-1 bg-warmbeige-100 text-warmgray-700 rounded-full text-xs font-medium mb-3">
            Центр духовного развития
          </div>
          <h1 className="text-3xl font-semibold mb-3 text-warmgray-800">
            Ваш путь к внутренней гармонии
          </h1>
          <p className="text-warmgray-600 max-w-sm mx-auto">
            Откройте для себя мир духовных практик и путь к самопознанию вместе с нашими опытными специалистами
          </p>
        </div>

        {/* Book Appointment Button */}
        <div className="mb-10 text-center">
          <Link to="/book">
            <AnimatedButton className="animate-bounce-soft shadow-md">
              Записаться на консультацию
            </AnimatedButton>
          </Link>
        </div>

        {/* Featured Services */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-warmgray-800">Популярные услуги</h2>
            <Link to="/services" className="flex items-center text-sm text-primary font-medium">
              <span>Все услуги</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                duration={service.duration}
                price={service.price}
              />
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-warmgray-800">Ближайшие мероприятия</h2>
            <Link to="/events" className="flex items-center text-sm text-primary font-medium">
              <span>Все мероприятия</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                specialist={event.specialist}
              />
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-warmgray-800">Популярные статьи</h2>
            <Link to="/articles" className="flex items-center text-sm text-primary font-medium">
              <span>Все статьи</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {popularArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
