'use client'

import Hamburger from 'hamburger-react'
import { useState } from 'react';

export function BurgerMenu() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    );
}
