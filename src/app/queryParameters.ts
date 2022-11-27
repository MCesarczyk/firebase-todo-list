import { useLocation } from "react-router-dom"

export const useQueryParameter = (key: string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};

interface QueryStringParams {
    key: string;
    value: string;

};

export const useReplaceQueryParameter = () => {
    const location = useLocation();

    return ({ key, value }: QueryStringParams) => {
        const searchParams = new URLSearchParams(location.search);

        if (value) {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }

        // history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};
