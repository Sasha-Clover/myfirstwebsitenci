// all worked on navbar development
// Tristan, Alex, Derek, Andrei
var navbar = `
		<nav class="navbar navbar-expand-lg ag_navbar" role="navigation">
			<div class="container-fluid">
				<!-- branding -->
				<a class="navbar-brand"  href="index.html">Group G |</a>
				<!-- login menu -->
				<!-- <button class="ag_login_icon" type="button"> -->
				<!-- 	<span class="">Log in</span> -->
				<!-- </button> -->
				<!-- hamburger menu -->
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<!-- buttons in compact form -->
					<a class="nav-link navBtn" href="index.html">Home</a>
					<a class="nav-link navBtn" href="news.html">News</a>
					<a class="nav-link navBtn" href="uisceire.html">UisceIRE</a>
					<a class="nav-link navBtn" href="sources.html">Sources</a>
					<a class="nav-link navBtn" href="conservation.html">Conservation</a>
					<a class="nav-link navBtn" href="findus.html">Find Us</a>
					<a class="nav-link navBtn" href="contact.html">Contact Us</a>
					<a class="nav-link navBtn" href="info.html">Info</a>
					<button class="nav-link navBtn ag_loginBtn" onclick="pop_up();" id="ag_loginBtn">Log in</button>
				</div>
			</div>
		</nav>`;

		// insert navbar at the beginning of body tag
		document.body.insertAdjacentHTML("afterbegin", navbar);
