import { useEffect, useState } from 'react';

function Quote() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await fetch('https://api.api-ninjas.com/v1/quotes?category=fitness', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'xfejAjO4SRw+FHI5ZdOsbQ==Po0lbyVxurbkp8ri',
          },
        });

        const data = await request.json();
        setInfo(data[0].quote);
        setIsLoading(false);
      } catch (error) {
        setHasError(error);
      }
    };
    fetchData();
  }, [setInfo, setIsLoading]);

  if (hasError) {
    return (
      <div className="error-container">
        Error!!! Something went wrong
      </div>
    );
  }

  if (isLoading) return <div className="loading-container">Loading...</div>;

  return (
    <div className="quote">
      {info}
    </div>

  );
}
export default Quote;
