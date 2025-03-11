"use client";
// import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormInputs {
  username: string;
  password: string;
}

export default function Login() {
  //   const [error, setError] = useState<string | null>(null);
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Handle login logic here
  //     console.log({ username, password, rememberMe });
  //   };

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data);
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/login",
    //     data
    //   );
    //   localStorage.setItem("token", response.data.token);
    //   alert("Login successful!");
    // } catch (err) {
    //   setError("Invalid email or password");
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                {...register("username", { required: "Username is required" })}
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                {...register("password", { required: "Password is required" })}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="pb-4">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </form>
        {/* <div className="text-center pb-6">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                // Handle sign up
                console.log("Sign up clicked");
              }}
            >
              Sign up
            </a>
          </p>
        </div> */}
      </Card>
    </div>
  );
}
