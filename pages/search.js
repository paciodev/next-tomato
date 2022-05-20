import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from '../Response'
import { useRouter } from 'next/router';
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  const router = useRouter()
  console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Tomato search</title>
        <link rel="icon" href="/tomato.png" />
      </Head>

      <SearchHeader term={router.query.term} />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(ctx) {
  const useDummyData = false;
  const startIndex = ctx.query.start || '0';

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex}`)
    .then(res => res.json())
  return {
    props:{
      results: data
    }
  }
}