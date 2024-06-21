// import { SignInButton, SignedIn,
//      SignedOut, UserButton } from "@clerk/nextjs"
// import { ModeToggle } from "./ModeToggel"


// const Nav = () => {
//   return (
//     <nav className="flex items-center justify-between gap-5">
//         <ModeToggle />
        
//         <SignedIn>
//         {/* Mount the UserButton component */}
//         <UserButton />
//       </SignedIn>
//       <SignedOut>
//         {/* Signed out users get sign in button */}
//         <SignInButton/>
//       </SignedOut>
//     </nav>
//   )
// }

// export default Nav

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggel";


const Nav = () => {
  return (
    <div className="container">
      <nav className="flex items-center justify-between py-5 w-full lg:w-3/4 mx-auto">
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </div>
  );
};

export default Nav;