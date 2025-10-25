import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground text-balance">
            Настройки
          </h1>
          <p className="text-muted-foreground mt-2 text-pretty">
            Настройки и предпочтения аккаунта
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="theme" className="text-base">
                Theme
              </Label>
              <Select defaultValue="light">
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Choose your preferred color scheme. System will match your
                device settings.
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label htmlFor="language" className="text-base">
                 Язык
              </Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Select your preferred language
              </p>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="compact-mode" className="text-base">
                  Compact Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  Display more content on screen
                </p>
              </div>
              <Switch id="compact-mode" />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
