import React, { PropsWithoutRef, useEffect, useState, useRef } from 'react';
import * as styles from './styles.module.scss';
import { Member } from '../query';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';

type Props = PropsWithoutRef<{
    member: Member
}>

/**
 * Viewer is divided into three layers
 *  1. Dimmed Huge Name (for design)
 *  2. Member Image (grayscaled)
 *  3. Member descript (aligned right)
 */
export default ({ member }: Props) => {

    const scrollbar = useRef<PerfectScrollbar>();

    useEffect(() => {
        setTimeout(() => {
            scrollbar.current?.updateScroll();
        }, 1000);
    });

    return (
        <>
            <div
                className={styles.viewerLayer}
                key={member.id}
            >
                {/** Dimmed Huge Name */}
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        timeout={250}
                        key={member.name}
                        classNames="slide"
                        addEndListener={() => { }}
                    >
                        <h3 className={styles.viewerName}>{member.name}</h3>
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className={styles.viewerLayer}>
                {/** Member Image */}
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        timeout={500}
                        key={member.Image.file.publicURL}
                        classNames="slideD"
                        addEndListener={() => { }}
                    >
                        <img
                            className={styles.viewerImg}
                            src={member.Image.file.publicURL}
                        />
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className={styles.viewerLayer}>
                {/** Member Description */}

                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={member.name}
                        timeout={800}
                        classNames="slideD"
                        addEndListener={() => { }}>
                        <div className={styles.viewerDesc}>
                            <PerfectScrollbar
                                ref={(ins) => { scrollbar.current = ins ?? undefined }}>
                                <h3>{member.name}</h3>
                                <p className="mb-0">{member.job_title}</p>
                                {member.job_desc ?
                                    <p dangerouslySetInnerHTML={{
                                        __html: member.job_desc,
                                    }} /> :
                                    null}
                                <p>{member.about}</p>
                            </PerfectScrollbar>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    );
}