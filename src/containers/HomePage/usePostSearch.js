import { useState, useEffect } from "react";
import axios from "axios";
import { tokenConfig } from "../../helpers/tokenConfig";

export default function usePostSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const baseURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${baseURL}/api/posts`)
      .then((res) => {
        setPosts(res.data?.results);
      })
      .catch((err) => {
        setError(err);
      });
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;

    axios({
      method: "GET",
      url: `${baseURL}/api/posts?page=1`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPosts(res.data?.results);
        setHasMore(res.data?.next > 0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, posts, hasMore };
}
