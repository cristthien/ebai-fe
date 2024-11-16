// Import necessary libraries and external components
// Import internal components
// Import styles
// Fetch or get data

interface pageProps {
  className?: string;
}

const page: React.FC<pageProps> = ({ className }) => {
  return <div className={className}>page</div>;
};

export default page;
