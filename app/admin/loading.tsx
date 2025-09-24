import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

export default function AdminLoading() {
  return (
    <div className="p-4 flex flex-col gap-5">
      {/* Loading skeleton for messages */}
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardHeader>
            <div className="h-6 bg-muted rounded-md w-3/4"></div>
            <div className="h-4 bg-muted rounded-md w-1/2"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded-md w-full"></div>
              <div className="h-4 bg-muted rounded-md w-5/6"></div>
              <div className="h-4 bg-muted rounded-md w-4/6"></div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Loading indicator */}
      <div className="flex justify-center items-center py-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Spinner size="sm" />
          <span>Loading messages...</span>
        </div>
      </div>
    </div>
  );
}
