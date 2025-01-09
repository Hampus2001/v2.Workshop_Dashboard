import { Avatar } from "@radix-ui/themes";

export default function AvatarButtonComponent({ personImages }) {
  return (
    <div>
      <Avatar size="3" src={personImages} radius="full" fallback="T" />
    </div>
  );
}
