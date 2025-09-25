import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //.........
  const onSubmit: SubmitHandler<FieldValues> = async () => {};
  //  login details
  const fillCredentials = (role: "admin" | "agent" | "user") => {
    switch (role) {
      case "admin":
        form.setValue("email", "admin1@gmail.com");
        form.setValue("password", "123456");
        break;
      case "agent":
        form.setValue("email", "agent1@gmail.com");
        form.setValue("password", "123456");
        break;
      case "user":
        form.setValue("email", "user1@gmail.com");
        form.setValue("password", "123456");
        break;
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account </h1>
        {/* Quick login buttons */}
        <div className="flex justify-between gap-4">
          <Button
            type="button"
            className="w-1/3"
            onClick={() => fillCredentials("admin")}
          >
            Admin
          </Button>
          <Button
            type="button"
            className="w-1/3"
            onClick={() => fillCredentials("agent")}
          >
            Agent
          </Button>
          <Button
            type="button"
            className="w-1/3"
            onClick={() => fillCredentials("user")}
          >
            User
          </Button>
        </div>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@example.com"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/*//* http://localhost:5000/api/v1/auth/google */}
        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}
