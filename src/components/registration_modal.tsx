"use client";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./ui/select";

export const RegistrationModal: React.FC = () => {

  const options = [
    {
      value: "customer",
      label: "I'm a Customer",
    },
    {
      value: "vendor",
      label: "I'm a Business Vendor",
    },
    {
      value: "investor",
      label: "I'm an investor",
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
        className="flex h-[50px] mb-10 items-center gap-4 rounded-full px-8 text-lg font-normal text-white xl:h-[55px] xl:text-2xl shadow-[0px_0px_54px_0px_#B4F72F33]"
        >
          Get Started <span>&rarr;</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-10">
        <DialogHeader className="mb-4 flex flex-row items-center justify-between text-base font-medium">
          Get Started
        </DialogHeader>
        <DialogDescription>
          <form>
            <fieldset className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label className="text-[#162A41]" htmlFor="name">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#162A41]" htmlFor="email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#162A41]" htmlFor="phone-no">
                  Phone No.
                </Label>
                <Input
                  type="text"
                  id="phone-no"
                  name="phone-no"
                  placeholder="Enter your phone"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#162A41]" htmlFor="inquiry">
                  Full Name
                </Label>
                <Select name="inquiry">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="h-[50px] text-lg font-normal text-white">
                Contact Us
              </Button>
            </fieldset>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
