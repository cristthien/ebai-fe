// Import necessary libraries and external components
// Import internal components
// Import styles
// Fetch or get data

import DateTimePickerForm from "@/components/time-picker/DateTimePickerForm";

interface pageProps {
  className?: string;
}

const page: React.FC<pageProps> = ({ className }) => {
  return (
    <div className={className}>
      <DateTimePickerForm />
    </div>
  );
};

export default page;
