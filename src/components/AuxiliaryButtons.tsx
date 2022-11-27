import styled from "styled-components";

export const AuxiliaryButtonsWrapper = styled.div`
    text-align: right;
    margin-right: 1rem;
`;

export const AuxiliaryButton = styled.button`
color: ${({ theme }) => theme.color.primary};
font-weight: 400;
background-color: transparent;
border: none;
transition: 0.5s;
cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.disabled};
        cursor: unset;
    }
`;

interface AuxiliaryButtonsProps {
    available: boolean;
    hideDone: boolean;
    allDone: boolean;
    allUndone: boolean;
    setHideDone: (hideDone: boolean) => void;
    setAllDoneStatus: (status: boolean) => void;
};

export const AuxiliaryButtons = ({ available, hideDone, allDone, allUndone, setHideDone, setAllDoneStatus }: AuxiliaryButtonsProps) => (
    <AuxiliaryButtonsWrapper>
        {available ? (
            <>
                <AuxiliaryButton onClick={() => setHideDone(!hideDone)}>
                    {hideDone ? "Show done tasks" : "Hide done tasks"}
                </AuxiliaryButton>
                <AuxiliaryButton
                    onClick={() => setAllDoneStatus(true)}
                    disabled={allDone}
                >
                    Mark all
                </AuxiliaryButton>
                <AuxiliaryButton
                    onClick={() => setAllDoneStatus(false)}
                    disabled={allUndone}
                >
                    Unmark all
                </AuxiliaryButton>
            </>
        ) : null}
    </AuxiliaryButtonsWrapper>
);
