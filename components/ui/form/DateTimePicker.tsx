// "use client";

// import { useFormContext } from "react-hook-form";
// import { Calendar1Icon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { format } from "date-fns";

// interface DateTimePickerProps {
//   fieldName: string;
// }

// export function DateTimePicker({ fieldName }: DateTimePickerProps) {
//   const {
//     setValue,
//     getValues,
//     watch,
//     formState: { errors },
//   } = useFormContext();

//   const time = watch(fieldName);

//   function handleDateSelect(date: Date | undefined) {
//     if (date) {
//       setValue(fieldName, date, { shouldValidate: true });
//     }
//   }

//   function handleTimeChange(type: "hour" | "minute", value: string) {
//     const currentDate = getValues(fieldName) || new Date();
//     let newDate = new Date(currentDate);

//     if (type === "hour") {
//       newDate.setHours(parseInt(value, 10));
//     } else if (type === "minute") {
//       newDate.setMinutes(parseInt(value, 10));
//     }

//     setValue(fieldName, newDate, { shouldValidate: true });
//   }

//   return (
//     <div className="flex flex-col">
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button variant="outline" className="w-full pl-3 text-left">
//             {time ? format(time, "MM/dd/yyyy HH:mm") : "MM/DD/YYYY HH:mm"}
//             <Calendar1Icon className="ml-auto h-4 w-4 opacity-50" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0">
//           <div className="flex">
//             <div className="p-2 border-r flex-1">
//               <Calendar
//                 mode="single"
//                 selected={time}
//                 onSelect={handleDateSelect}
//                 initialFocus
//               />
//             </div>
//             <ScrollArea className="max-h-72 flex-1 border-r">
//               <div className="flex flex-col p-2">
//                 {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
//                   <Button
//                     key={hour}
//                     variant={
//                       time && time.getHours() === hour ? "default" : "ghost"
//                     }
//                     onClick={() => handleTimeChange("hour", hour.toString())}
//                   >
//                     {hour}
//                   </Button>
//                 ))}
//               </div>
//             </ScrollArea>
//             <ScrollArea className="max-h-72 flex-1">
//               <div className="flex flex-col p-2">
//                 {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
//                   <Button
//                     key={minute}
//                     variant={
//                       time && time.getMinutes() === minute ? "default" : "ghost"
//                     }
//                     onClick={() =>
//                       handleTimeChange("minute", minute.toString())
//                     }
//                   >
//                     {minute.toString().padStart(2, "0")}
//                   </Button>
//                 ))}
//               </div>
//             </ScrollArea>
//           </div>
//         </PopoverContent>
//       </Popover>
//       <p className="text-red-500 text-sm mt-1">
//         {errors[fieldName]?.message?.toString()}
//       </p>
//     </div>
//   );
// }

export default function DateTimePicker({ className }: { className: string }) {}
