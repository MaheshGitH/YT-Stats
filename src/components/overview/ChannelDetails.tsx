import { BiLinkExternal } from "react-icons/bi";
import DetailSection from "./DetailSection";

const ChannelDetails = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-full lg:mt-20 duration-300">
      <DetailSection heading="Country : ">India</DetailSection>
      <DetailSection
        customClass=" text-primary flex gap-1 items-center"
        heading="Channel URL : "
      >
        <button>
          @workingdog <BiLinkExternal className="size-4 inline-block" />
        </button>
      </DetailSection>

      <DetailSection customClass=" flex-col mb-5 " heading="Description : ">
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo in, cumque quo assumenda quasi sint, non dicta natus enim debitis neque ut cum. Magnam rerum odio facilis exercitationem adipisci laudantium asperiores ipsam voluptate modi provident recusandae fugiat, atque hic. Eaque architecto inventore eius sequi quo iste incidunt consequuntur nisi similique laborum, est soluta sunt veritatis molestiae et iusto assumenda, doloremque ea maiores aliquid quam debitis mollitia. Quisquam eaque ex animi fugit adipisci illo, ipsa aperiam repellat. Magnam, optio ab! Maxime eos reiciendis cupiditate delectus culpa dignissimos dolor et ipsum commodi natus consequatur debitis possimus dolores odio consequuntur ducimus, corporis molestiae dicta voluptatum ut? Ea, rerum, dignissimos, provident expedita voluptatum harum dolores laborum quod animi quis voluptatibus vitae aut. Assumenda odit excepturi officia ipsum enim, eius quaerat dolores maxime accusamus molestias quas esse facere repellat magnam numquam quam deleniti voluptas neque laborum nobis explicabo a harum beatae! Recusandae magni eos, a optio voluptate ea saepe officia sit inventore quos eveniet! At recusandae, dignissimos sed minus accusantium eum porro in dolorem itaque, pariatur deserunt hic veniam esse. Architecto tempora temporibus reprehenderit doloremque harum enim praesentium cupiditate. Repellendus placeat possimus quibusdam dolorem ullam, corrupti sint corporis beatae? Similique, eaque distinctio molestias incidunt earum, delectus rem officiis doloribus nobis soluta id ab dolorum expedita doloremque est non ipsa modi. Dolor, optio veritatis. Reprehenderit perferendis aut amet neque, soluta odio quo laborum, repellendus tenetur harum adipisci optio voluptate, deserunt in vitae nihil illum aliquam distinctio quis esse recusandae aliquid iste rem. Expedita nihil officiis quidem suscipit ullam blanditiis quo, non architecto, aliquam ipsam numquam velit pariatur, atque dolores voluptatibus tempora obcaecati. Quia repellendus repellat consequuntur molestias officiis ullam laudantium alias blanditiis sapiente sequi, deleniti at praesentium pariatur eveniet, eum, aliquid maiores enim? Illum ex consequuntur dolores repellat nam delectus velit labore nobis, eligendi quia, cupiditate aperiam! Aspernatur odio facere quibusdam quos at ad doloremque asperiores similique iusto voluptates deleniti commodi iure hic, ab laborum unde voluptatem sed explicabo, consequuntur esse tenetur ullam neque. Necessitatibus eligendi dolores earum veritatis beatae nihil corporis asperiores fugiat natus laudantium, autem saepe iure aliquam eum nobis id, iste delectus mollitia omnis exercitationem! Consequatur quas eveniet nulla reiciendis iste sequi perspiciatis accusantium ipsa eos numquam, recusandae officiis blanditiis culpa! Nisi, minima harum. Reprehenderit tenetur animi fugiat? Provident asperiores nesciunt tempora consequuntur aperiam numquam facilis nostrum odio doloribus commodi a natus, totam sint minus earum vitae impedit error quos illo suscipit."
        }
      </DetailSection>
    </div>
  );
};

export default ChannelDetails;
