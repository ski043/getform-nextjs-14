import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/web/SubmitButton";
import { File } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Card className="w-[500px]">
        <Tabs defaultValue="problem">
          <CardHeader>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="password">Question</TabsTrigger>
              <TabsTrigger value="lol">Feedback</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="problem">
              <p className="text-muted-foreground text-sm">
                What is the issue? If you’re reporting a bug, what are the steps
                you took so we can reproduce the behaviour?
              </p>
              <div className="space-y-4 mt-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Problem</Label>
                  <Textarea
                    placeholder="Something is wrong..."
                    className="h-32"
                  />
                </div>
                <Button variant="ghost">
                  <File className="size-4 mr-2" /> Attach Image
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <p>
                How can we help? Please share any relevant information we may
                need to answer your question.
              </p>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="lol">
              <p>
                How can we improve Linear? If you have a feature request, can
                you also share how you would use it and why it’s important to
                you?
              </p>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </div>
            </TabsContent>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  );
}
