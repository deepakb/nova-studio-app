import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsap = (
    effect: (context: gsap.Context) => void | (() => void),
    dependencies: React.DependencyList = [],
    scope?: React.RefObject<Element | null>
) => {
    const context = useRef<gsap.Context>(null);

    useLayoutEffect(() => {
        context.current = gsap.context(effect, scope || undefined);

        return () => {
            context.current?.revert();
        };
    }, dependencies);

    return context;
};
