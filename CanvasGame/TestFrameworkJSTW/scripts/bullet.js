var Bullet = (function() {
    function Bullet(x, y) {
        this.position = new Vector2(x, y);
        this.movement = {
            left: false,
            right: false
        };
        this.velocity = -5;
        this.width = 20;
        this.height = 27;
        this.animation = new Animation (
            this.width,
            this.height,
            0,
            0,
            1,
            'images/bullet.png',
            6,
            0,
            0
        );

        this.boundingBox = new Rectangle (
            x,
            y,
            this.width,
            this.height
        );
    }

    Bullet.prototype.update = function() {
        if(this.movement.left) {
            this.position.x += this.velocity;
            if (this.position.x <= -50) {
                this.movement.left = false;
                //this.movement.right = false;
            }
        }
        else if (this.movement.right) {
            this.position.x -= this.velocity;
            if (this.position.x >= 1150) {
                this.movement.right = false;
            }
        }

        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();

    };

    Bullet.prototype.render = function() {
        this.animation.draw(ctx);
    };

    return Bullet;
}());