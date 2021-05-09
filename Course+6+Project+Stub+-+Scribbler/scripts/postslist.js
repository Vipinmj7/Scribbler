// Search the modals and obtain the reference here
var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

// Search for the delete icons that opened the modal
var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);



// Delete the seleted post
var selectedPost;

//
cancelDelete.addEventListener("click", () => closeModal(deletePostModal));
confirmDelete.addEventListener("click", () => deletePost());


window.addEventListener("click", function(event) {
    if (event.target == deletePostModal) {
        deletePostModal.style.display = "none";
    }
});

openDeletePostModal = (deletePostModal, clickedIcon) => {
    selectedPost = "";
    openModal(deletePostModal);
    selectedPost = clickedIcon.closest(".post");
};

deletePost = () => {
    selectedPost.remove();
    closeModal(deletePostModal);
};

// Event handlers
deleteIconsArray.map(deleteIcon => {
    deleteIcon.addEventListener("click", e =>
        openDeletePostModal(deletePostModal, e.target)
    );
});

//************************************************************************************************
// Dots icon section
// Search the dots
var dots = document.querySelectorAll(".dots-icon");
var dotsArray = Array.from(dots);

dotsArray.map(dot => {
    dot.addEventListener("click", e => navigateToPost(e.target));
});

navigateToPost = postThread => {
    console.log("inside");
    window.location.href = "../html/post.html";
};

//**************************************************************************************************
//common functions
openModal = modal => {
    modal.style.display = "block";
};
closeModal = modal => {
    modal.style.display = "none";
};
