deleted code:

  const [londonW, setLondonW] = useState({});
  const [bristolW, setBristolW] = useState({});
  const [romeW, setRomeW] = useState({});

  useEffect(()=>{
    fetch("http://api.weatherapi.com/v1/current.json?key=35e7a2ccc7274136a3f104341212607&q=London&aqi=no")
    .then(res => res.json())
    .then(data => setLondonW(data));
  }, []);

  useEffect (()=>{
    fetch("http://api.weatherapi.com/v1/current.json?key=35e7a2ccc7274136a3f104341212607&q=Bristol&aqi=no")
    .then(res => res.json())
    .then(data => setBristolW(data))
  }, []);

  useEffect(()=>{
    fetch("http://api.weatherapi.com/v1/current.json?key=35e7a2ccc7274136a3f104341212607&q=Rome&aqi=no")
    .then(res => res.json())
    .then(data => setRomeW(data))
  }, [])