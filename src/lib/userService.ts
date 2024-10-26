// import { db } from './firebase';
// import { ref, set, get } from "firebase/database";

// export async function saveWalletAddress(walletAddress: string) {
//   const user = auth.currentUser;
//   if (!user) {
//     throw new Error('No user is currently logged in');
//   }

//   try {
//     await set(ref(db, `users/${user.uid}/walletAddress`), walletAddress);
//     console.log('Wallet address saved successfully');
//   } catch (error) {
//     console.error('Error saving wallet address:', error);
//     throw error;
//   }
// }

// export async function getWalletAddress(): Promise<string | null> {
//   const user = auth.currentUser;
//   if (!user) {
//     throw new Error('No user is currently logged in');
//   }

//   try {
//     const snapshot = await get(ref(db, `users/${user.uid}/walletAddress`));
//     if (snapshot.exists()) {
//       return snapshot.val();
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting wallet address:', error);
//     throw error;
//   }
// }