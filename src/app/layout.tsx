import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local"
import {Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavLink, NavDropdown, DropdownItem} from "react-bootstrap";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Gaia Gauntlet",
    description: "One event. Countless creators. One champion. 👑",
};

const ari_w9500 = localFont({
  src: [
    {
      path: "./fonts/ari-w9500.ttf",
      weight: "normal",
      style: "normal"
    },
    {
      path: "./fonts/ari-w9500-display.ttf",
      weight: "bold",
      style: "normal"
    }
  ]
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-bs-theme="dark">
        <body>
        <div className={"page-top-spacer"}/>
        <Navbar expand="lg" fixed={"top"}>
            <NavbarBrand href="/">
                <Image src={"/branding/5_point_tree.svg"} alt={""} width={48} height={48} />
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="justify-content-end">
                <NavDropdown title={"People"}>
                    <DropdownItem href={"/#team"}>Staff</DropdownItem>
                    <DropdownItem href={"/#contributors"}>Contributors</DropdownItem>
                    <DropdownItem href={"/#previous-staff"}>Previous Staff</DropdownItem>
                </NavDropdown>
            </NavbarCollapse>
        </Navbar>
        {children}
        </body>
        </html>
    );
}
