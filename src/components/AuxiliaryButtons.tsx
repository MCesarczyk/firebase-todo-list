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
    setHideDone: (hideDone: boolean) => void;
};

export const AuxiliaryButtons = ({ available, hideDone, allDone, setHideDone }: AuxiliaryButtonsProps) => (
    <AuxiliaryButtonsWrapper>
        {available ? (
            <>
                <AuxiliaryButton onClick={() => setHideDone(!hideDone)}>
                    {hideDone ? "Show all done" : "Hide all done"}
                </AuxiliaryButton>
                <AuxiliaryButton
                    onClick={() => console.log("setAllDone")}
                    disabled={allDone}
                >
                    Set all done
                </AuxiliaryButton>
            </>
        ) : null}
    </AuxiliaryButtonsWrapper>
);
