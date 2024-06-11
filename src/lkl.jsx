import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import React from "react";

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());

export default function lkl() {
    return (
        <div className="way">
            
            Text check 
            {/* <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "30px" }}>Let me show you Something Fat and Thick 😀</span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer> */}
        </div>
    )
}

