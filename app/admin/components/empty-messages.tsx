import { MessageCircle } from "lucide-react";

export const EmptyMessages = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted/50">
          <MessageCircle className="w-10 h-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            Нет сообщений
          </h3>
          <p className="text-muted-foreground">
            Пока никто не задал вопросов. Когда пользователи начнут задавать
            вопросы, они появятся здесь.
          </p>
        </div>
      </div>
    </div>
  );
};
