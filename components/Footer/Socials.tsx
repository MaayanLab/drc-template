'use server'
import React from "react"
import Link from "@/utils/link"
import IconButton from "@mui/material/IconButton"
import Twitter from "@/public/img/Twitter.svg"
import Email from "@/public/img/email.svg"
import Youtube from "@/public/img/Youtube.svg"

const SocialMedia = () => {
    return (
        <div className='flex items-center space-x-2'>
            <Link href="mailto:help@cfde.cloud">
                <IconButton color={"secondary"}>
                    <Email/>
                </IconButton>
            </Link>
            <Link href="https://twitter.com/CfdeWorkbench" target="_blank" rel="noopener noreferrer">
                <IconButton  color={"secondary"}>
                    <Twitter/>
                </IconButton>
            </Link>
            <Link href="https://www.youtube.com/@CFDEWorkbench" target="_blank" rel="noopener noreferrer">
                <IconButton  color={"secondary"}>
                    <Youtube/>
                </IconButton>
            </Link>
        </div>
    )
}
export default SocialMedia