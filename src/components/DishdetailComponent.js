import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    console.log(dish);
    if (dish) return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
    else return (<div></div>);
}

function RenderComments({comments}){
    if(comments) {
        console.log(comments);
        console.log(comments[1]);
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <div>
                    {comments.map((c) => {
                        return (
                            <div>
                                <p>{c.comment}</p>
                                <p>{c.author + ' , ' + new Date(c.date).toDateString().substring(4)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    else return(<div></div>);
}

function DishDetail(props) {

    if(props.dish){
        console.log(props.dish);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else return (<div></div>);


}

export default DishDetail;