import React from "react"

import { FaPhoneAlt} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';

import { 
    HeaderContent,
    ButtonsContainer,
    TitleHeader,
    ButtonHeader,
    ItemsContent,
    DrawerButton,
    Backdrop,
    Drawer,
    CloseDrawer
} from "./styles";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Search from "../SearchField";

const Header = () => {
    const router = useRouter();
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        if (openDrawer) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [openDrawer])

    const handleNavigate = useCallback((path) => {
        setOpenDrawer(false)
        router.push(path)
    }, [router])
    return (
        <HeaderContent>

            <DrawerButton onClick={() => setOpenDrawer(!openDrawer)}>
                <FaBars />
            </DrawerButton>

            <TitleHeader onClick={() => router.push("/")}>
                MagaNets
            </TitleHeader> 

             <ItemsContent>
                <ButtonsContainer>
                    <ButtonHeader>
                        <IoLocationSharp />
                        <span>Cidade: São Paulo</span>
                    </ButtonHeader>

                    <ButtonHeader>
                        <FaPhoneAlt />
                        <span>Central de atendimento</span>
                    </ButtonHeader>

                    <ButtonHeader onClick={() => router.push("/my-wishlist")}>
                        <AiFillHeart />
                        <span>Lista de desejos</span>
                    </ButtonHeader>
                </ButtonsContainer>
                
                <Search />
            </ItemsContent>
        
        <Backdrop hidden={openDrawer}>
            <motion.div 
                transition={{ duration: 0.3 }}
                animate={openDrawer ? { x: 0 } : { x: -350 }}
                style={{
                   width: "100%", 
                }}
            >
            <Drawer>
                <h1 onClick={() => handleNavigate("/")}>
                    MagaNets
                </h1>
                <span onClick={() => handleNavigate("/")}>Início</span>
                <span>Central de atendimento</span>  
                <span onClick={() => handleNavigate("/my-wishlist")}>Lista de desejos</span>  
            </Drawer>
            </motion.div>
            <CloseDrawer onClick={() => setOpenDrawer(!openDrawer)}>
                <RiCloseCircleLine />
            </CloseDrawer>
        </Backdrop>
        </HeaderContent>
    )
}

export default Header