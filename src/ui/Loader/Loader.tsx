import React from 'react';
import './Loader.css'

interface LoaderProps {
    loading: boolean;
}

export const Loader = ({ loading }: LoaderProps) => {
    if (loading) {
        return (
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    } else {
        return null
    }
}

