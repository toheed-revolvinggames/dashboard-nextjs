import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  return (
    <DashboardSkeleton/>
  );
}

// Loading.tsx is special next js file built on the top of 
// react suspense. It allows you to create a fallback UI to show
// as a replacement while page content loads.