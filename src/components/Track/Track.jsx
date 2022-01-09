import React from "react";

export class Track extends React.Component {

    render () {
        return (
            <div class="Track">
                    <div class="Track-information">
                        <p>
                            {/* track artist will go here | track album will go here */}
                        </p>
                    </div>
                    <button class="Track-action">
                        {/* + or - will go here */}
                    </button>
            </div>
        );
    }

}