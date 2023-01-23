import { useEffect } from "react";

export function Title(title: string) {
    useEffect(() => {
        document.title = title;
    })
}