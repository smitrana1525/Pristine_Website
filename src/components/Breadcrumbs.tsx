import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on homepage
  if (paths.length === 0) return null;

  const breadcrumbMap: { [key: string]: string } = {
    'about': 'About Us',
    'services': 'Services',
    'owners-association-management': 'Owners Association Management',
    'financial-administrative-services': 'Financial & Administrative Management',
    'facilities-management': 'Facilities & Operations Management',
    'health-safety-compliance': 'Health, Safety & Compliance',
    'community-engagement': 'Community Engagement',
    'technology-portal-solutions': 'Technology & Portal Solutions',
    'consultancy-new-developments': 'Consultancy for New Developments',
    'communities': 'Communities',
    'why-us': 'Why Choose Us',
    'blog': 'Blog & News',
    'contact': 'Contact Us',
  };

  return (
    <nav 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" 
      aria-label="Breadcrumb"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link 
            to="/" 
            className="hover:text-primary transition-colors"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only" itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          const pathName = breadcrumbMap[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
          const href = '/' + paths.slice(0, index + 1).join('/');

          return (
            <li key={path} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
              {isLast ? (
                <span className="text-foreground font-medium" itemProp="name">{pathName}</span>
              ) : (
                <Link 
                  to={href} 
                  className="hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{pathName}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

