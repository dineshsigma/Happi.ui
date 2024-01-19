export default function({ store, redirect }) {
    console.log("ISSSSSS AUTH",store.state.auth.isLoggedIn);
    if (!store.state.auth.isLoggedIn) {
        // return '';
        return redirect('/account/login');
    }
}
