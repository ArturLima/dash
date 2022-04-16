import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}