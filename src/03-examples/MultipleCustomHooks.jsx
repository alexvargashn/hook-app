import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(0);

    const {data, isLoading, hasError} = useFetch(`http://localhost:3001/v1/quotes/by/${counter}`);
    const { author, quote } = !!data && data ;
  return (
    <>
        <h1>BreakingBad Quotes</h1>  
        <hr />
        {
          (isLoading) ?
             <LoadingQuote />
          :
            <Quote author={author} quote={quote} />
        }
        <button 
          onClick={ () => increment() } 
          className="btn btn-primary"
          disabled={isLoading}>
          Next quote
        </button>
    </>
  )
}
