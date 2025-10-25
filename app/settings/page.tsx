import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User, Bell, Palette, Shield, Trash2 } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground text-balance">
              Settings
            </h1>
            <p className="text-muted-foreground mt-2 text-pretty">
              Manage your account settings and preferences
            </p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6 mt-6">
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Profile Information
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Update your personal information and how others see you
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="johndoe" />
                      <p className="text-xs text-muted-foreground">
                        This is your public display name. It can be your real
                        name or a pseudonym.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself"
                        className="min-h-24"
                      />
                      <p className="text-xs text-muted-foreground">
                        Brief description for your profile.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 mt-6">
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Notification Preferences
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Choose what notifications you want to receive
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label
                          htmlFor="email-notifications"
                          className="text-base"
                        >
                          Email Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch id="email-notifications" />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="poll-updates" className="text-base">
                          Poll Updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when polls you created get new votes
                        </p>
                      </div>
                      <Switch id="poll-updates" defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="new-polls" className="text-base">
                          New Polls
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Notify me when new polls are created in my communities
                        </p>
                      </div>
                      <Switch id="new-polls" defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="comments" className="text-base">
                          Comments
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when someone comments on your polls
                        </p>
                      </div>
                      <Switch id="comments" defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="marketing" className="text-base">
                          Marketing Emails
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new features and updates
                        </p>
                      </div>
                      <Switch id="marketing" />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6 mt-6">
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Appearance Settings
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customize how NG POLL looks for you
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="theme" className="text-base">
                        Theme
                      </Label>
                      <Select defaultValue="system">
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Choose your preferred color scheme. System will match
                        your device settings.
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label htmlFor="language" className="text-base">
                        Language
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
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6 mt-6">
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Account Security
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage your password and security settings
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirm New Password
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>Update Password</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-destructive/50">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-destructive">
                      Danger Zone
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Irreversible actions for your account
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="font-medium text-foreground">
                          Delete Account
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all associated
                          data. This action cannot be undone.
                        </p>
                      </div>
                      <Button variant="destructive" className="shrink-0 gap-2">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
