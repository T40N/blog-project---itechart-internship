export default function MyPostsPage() {

    const { id } = useParams();

    const [user, setUser] = useState(null);
    useEffect(() => {
    getUserInfo(id).then((info) => {
      setAuthor(info);
      console.log(author);
    });
  }, []);

    return(

    )
}