import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FilterType } from './Portfolio';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: FilterType[];
  link?: string;
  github?: string;
  span?: 'col' | 'row' | 'both' | 'normal'; // For precise control of grid spans
}

interface ProjectGridProps {
  filter: FilterType;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ filter }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Track modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Projects data precisely arranged to match the image layout
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Online shopping platform with payment integration',
      technologies: ['React', 'Next.js', 'Node.js', 'Stripe', 'MongoDB'],
      span: 'both',
      github: 'https://github.com/', // Large tile spanning both row and column
    },
    {
      id: '2',
      title: 'Weather Dashboard',
      image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Real-time weather forecast application',
      technologies: ['React', 'Weather API', 'Redux'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '3',
      title: 'Code Editor',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Online code editing platform',
      technologies: ['TypeScript', 'Monaco Editor', 'WebRTC'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '4',
      title: 'Recipe App',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Discover and share recipes',
      technologies: ['React', 'Firebase', 'Tailwind'],
      span: 'col',
      github: 'https://github.com/' // Spans horizontally
    },
    {
      id: '5',
      title: 'AI Image Generator',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'AI-powered image generation tool',
      technologies: ['React', 'OpenAI', 'TensorFlow'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '6',
      title: 'Task Management',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Organize your tasks and projects',
      technologies: ['Vue.js', 'Vuex', 'Firebase'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '7',
      title: 'Music Streaming',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Stream and discover music',
      technologies: ['React', 'Node.js', 'MongoDB'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '8',
      title: 'Travel Planning',
      image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Plan your trips and itineraries',
      technologies: ['React Native', 'Maps API', 'Firebase'],
      span: 'both',
      github: 'https://github.com/' // Large tile spanning both row and column
    },
    {
      id: '9',
      title: 'Social Media Dashboard',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Analytics for social media platforms',
      technologies: ['Vue.js', 'Express', 'D3.js'],
      span: 'both',
      github: 'https://github.com/' // Large tile spanning both row and column
    },
    {
      id: '10',
      title: 'AI Content Generator',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Generate content with AI',
      technologies: ['React', 'Python', 'OpenAI'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '11',
      title: 'Real-time Chat',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Instant messaging application',
      technologies: ['React', 'WebSocket', 'Firebase'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '12',
      title: 'Budget Tracker',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Track your expenses and budget',
      technologies: ['React', 'D3.js', 'Express'],
      span: 'row',
      github: 'https://github.com/' // Spans vertically
    },
    {
      id: '13',
      title: 'Portfolio Website',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Showcase your work and skills',
      technologies: ['React', 'Next.js', 'Tailwind'],
      span: 'col',
      github: 'https://github.com/' // Spans horizontally
    },
    {
      id: '14',
      title: 'Fitness Tracker',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Track your fitness activities',
      technologies: ['React Native', 'Firebase', 'HealthKit'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '15',
      title: 'Virtual Event Platform',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Host virtual events and meetings',
      technologies: ['React', 'WebRTC', 'Node.js'],
      span: 'normal',
      github: 'https://github.com/'
    },
    {
      id: '16',
      title: 'Learning Platform',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Online education platform',
      technologies: ['React', 'Firebase', 'Express'],
      span: 'both',
      github: 'https://github.com/' // Large tile spanning both row and column
    }
  ];

  useEffect(() => {
    // Simulate image loading
    setIsLoading(true);

    setTimeout(() => {
      if (filter === 'All') {
        setFilteredProjects(projects);
      } else {
        const filtered = projects.filter(project => 
          project.technologies.includes(filter)
        );
        setFilteredProjects(filtered);
      }
      setIsLoading(false);
    }, 300);
  }, [filter]);

  // Function to handle image load errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  // Helper function to determine grid classes based on project span type
  const getGridClasses = (span?: string) => {
    switch(span) {
      case 'both':
        return "col-span-2 row-span-2";
      case 'col':
        return "col-span-2";
      case 'row':
        return "row-span-2";
      default:
        return "";
    }
  };

  // Modified Modal/Lightbox for project details
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    
    // Apply blur effect only to the gallery content, not the filters
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
      galleryContainer.classList.add('blur-effect');
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    
    // Remove blur effect
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
      galleryContainer.classList.remove('blur-effect');
    }
  };
  
  // Handle keyboard accessibility for modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);
  
  // Effect to add blur to specific parts of the website when the modal is open
  useEffect(() => {
    // Create a style element for the blur effect if it doesn't exist
    let styleElement = document.getElementById('blur-style');
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'blur-style';
      document.head.appendChild(styleElement);
    }
    
    // Add or remove the CSS rule based on modal state
    if (styleElement) {
      styleElement.innerHTML = isModalOpen 
        ? `
          .blur-effect {
            filter: blur(5px);
            transition: filter 0.3s ease;
          }
        `
        : '';
    }
    
    // Clean up on component unmount
    return () => {
      if (styleElement && styleElement.parentNode) {
        document.head.removeChild(styleElement);
      }
    };
  }, [isModalOpen]);

  // Generate tech badge colors dynamically
  const getTechBadgeColor = (tech: string) => {
    const colors = [
      'bg-blue-500/40', 'bg-green-500/40', 'bg-purple-500/40', 
      'bg-amber-500/40', 'bg-rose-500/40', 'bg-teal-500/40'
    ];
    // Simple hash function to consistently get the same color for the same tech
    const index = tech.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <>
      <div id="gallery-container">
        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
            {[...Array(8)].map((_, i) => (
              <div 
                key={`skeleton-${i}`}
                className={`animate-pulse bg-white/10 rounded-xl ${i % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
              />
            ))}
          </div>
        )}
        
        <div className={`grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 ${isLoading ? 'hidden' : ''}`}>
          <AnimatePresence mode="popLayout">
            {!isLoading && filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 ${getGridClasses(project.span)}`}
                onClick={() => openModal(project)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
                aria-label={`View details for ${project.title}`}
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                  
                  {/* Show description by default instead of only on hover */}
                  <div className="mt-2">
                    <p className="text-white/90 text-sm line-clamp-3">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={`${project.id}-tech-${index}`}
                          className={`text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/20 shadow-sm transition-all ${getTechBadgeColor(tech)} text-white font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/20 bg-white/20 text-white font-medium transition-all hover:bg-white/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {!isLoading && filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <h3 className="text-xl text-white/80">No projects found with this technology</h3>
              <p className="text-white/60 mt-2">Try selecting a different filter</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Modal/Lightbox */}
      {/* Project Modal/Lightbox - Rendered in portal to center in viewport */}
      {selectedProject &&
        createPortal(
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center lightbox-modal"
              onClick={closeModal}
              style={{ backdropFilter: 'blur(5px)' }}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-auto max-w-screen-md mx-auto flex flex-col items-center justify-center bg-[rgba(30,30,30,0.95)] rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  position: 'relative',
                }}
              >
                {/* Main Image */}
                <div className="relative w-full bg-black/10 rounded-lg overflow-hidden">
                  <motion.div
  className="flex justify-center items-center"
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -40, opacity: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  <img 
    src={selectedProject.image} 
    alt={selectedProject.title} 
    className="w-full rounded-lg shadow-2xl"
    style={{ 
      maxHeight: '50vh', 
      objectFit: 'contain',
      maxWidth: '100%'
    }}
  />
</motion.div>
                  <button 
                    onClick={closeModal}
                    aria-label="Close"
                    className="absolute top-2 right-2 z-50 bg-black/70 hover:bg-black/90 w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/80 transition-all duration-200 md:top-4 md:right-4"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  {/* Project details below image */}
                  <motion.div
  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 40, opacity: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
>
  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
  <p className="text-white/70 mt-2">{selectedProject.description}</p>
  {selectedProject.github && (
    <a
      href={selectedProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mt-4 mb-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 text-white/90 backdrop-blur-sm shadow-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.909-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.089 2.91.833.092-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.746 0 .268.18.579.688.481C19.135 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
      GitHub
    </a>
  )}
  <div className="mt-4">
    <div className="flex flex-wrap gap-2">
      {selectedProject.technologies.map((tech, index) => (
        <span 
          key={`modal-tech-${index}`}
          className={`text-sm px-3 py-1 rounded-full ${getTechBadgeColor(tech)} text-white transition-transform transition-shadow duration-200 hover:scale-110 hover:bg-white/20 hover:shadow-lg cursor-pointer`}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</motion.div>
                </div>
                {/* Navigation Controls - Optional but positioned better */}
                <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-4">
                  <button 
                    className="bg-black/30 hover:bg-black/50 rounded-full p-3 text-white backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button 
                    className="bg-black/30 hover:bg-black/50 rounded-full p-3 text-white backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )
      }
    </>
  );
};

export default ProjectGrid;