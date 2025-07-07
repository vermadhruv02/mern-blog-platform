import { Button } from './ui/button'
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup} from 'firebase/auth'
import { auth , googleProvider } from "@/helper/firebase"
import { showToast } from '@/helper/ShowToast';
import { useNavigate } from 'react-router-dom';

const GoogleSignin = () => {

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
              // console.log('Response:', responseData);
        
              if (res.status === 201) {
                showToast('Registration successful', 'success');
                navigate('/'); 
                
                console.log('Registration successful:', responseData);
              } else {
                console.error('Registration failed:', responseData);
                showToast(responseData.message || 'Registration failed', 'error');
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
