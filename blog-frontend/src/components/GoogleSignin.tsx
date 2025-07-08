import { Button } from './ui/button'
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup} from 'firebase/auth'
import { auth , googleProvider } from "@/helper/firebase"
import { showToast } from '@/helper/ShowToast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/userSlice';

const GoogleSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleLogin = async () =>{
        const googleResponse = await signInWithPopup(auth, googleProvider);
        const user = googleResponse.user
        const bodyData = {
          fullName: user.displayName,
          email: user.email,
          username: `${user.displayName}-${user.uid}`,
          avatar: user.photoURL
        }
        console.log(bodyData);

         fetch('/api/v1/user/google-login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', // if you're using cookies
            body: JSON.stringify(bodyData),
          })
            .then(async (res) => {
              const responseData = await res.json();
              const user = responseData.data.user;
              console.log('User data:', user);
              console.log('Response:', responseData);
        
              if (res.status === 200) {
                showToast('Login successful', 'success');
                navigate('/');
                dispatch(setUser(user));
                // console.log('Login successful:', responseData);
              } else {
                console.error('Login failed:', responseData);
                showToast(responseData.message || 'Login failed', 'error');
              }
            })
            .catch((error) => {
              console.error('Registration error:', error);
              showToast('Registration error', 'error');
            });
    }
  return (
   
        <Button variant={'outline'} className='w-full' onClick={handleLogin}>
            <FcGoogle />
          Continue with google 
        </Button>
        
  )
}

export default GoogleSignin
