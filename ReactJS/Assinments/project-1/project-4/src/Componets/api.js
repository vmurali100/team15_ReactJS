/* eslint-disable no-lone-blocks */
{/* <><label htmlFor="">Id: </label><input
    type="text"
    name="Id"
    value={value.user.name.id}
    onChange={(e) => {
        value.hanldeChange(e);
    }} /></>{ " " }
<><br /><label htmlFor="">UserId: </label><input
    type="text"
    name="userId"
    value={value.user.name.userId}
    onChange={(e) => {
        value.hanldeChange(e);
    }} /></>{ " " }
<><br /><label htmlFor="">Date : </label><input
    type="text"
    name="date"
    value={value.user.date}
    onChange={(e) => {
        value.hanldeChange(e);
    }} /></>{ " " }
<><br /><br /><label htmlFor="">
    <b>products : </b>
</label><br /><label htmlFor="">Number :</label><input
        type="text"
        name="products.productId"
        value={value.user.products.productId}
        onChange={(e) => {
            value.hanldeChange(e);
        }} /></>{ " " }
<><br /><label htmlFor="">City :</label><input
    type="text"
    name="products.quantity"
    value={value.user.products.quantity}
    onChange={(e) => {
        value.hanldeChange(e);
    }} /></>{ " " }
<><br /><label htmlFor="">__v : </label><input
    type="text"
    name="__v"
    value={value.user.__v}
    onChange={(e) => {
        value.hanldeChange(e);
    }} /></>{ " " }
<><br /><br /><br /></>
{
    value.isEdit ? (
        <button type="button" onClick={value.handleUpdate}>
            Update User
        </button>
    ) : (
    <button type="button" onClick={value.createUser}>
        Create User
    </button>
)
} */}