import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner size="3" />
    </div>
  );
}
