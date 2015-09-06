/**
 * Created by Ivan on 06.09.2015.
 */
Post = function (post_name, text) {
    this.post_name = post_name,
        this.date = new Date(),
        this.text = text,
        this.user_id;
    //метод зміна тексту
    this.changeText = function (newText) {
        this.text = newText;
        return 'text Saved: ' + this.text;
    };
    //метод видалення поста;
    this.deletePost = function(dPost){
        delete dPost;
        return ("Post deleted");
    };

};

exports.Post = Post;