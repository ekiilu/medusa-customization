import { Store as MedusaStore } from '@medusajs/medusa/dist';
import { Entity, JoinColumn, OneToMany } from 'typeorm';
import { Entity as MedusaEntity } from 'medusa-extender';
import { User } from '../../user/entities/user.entity';

@MedusaEntity({ override: MedusaStore })
@Entity()
export class Store extends MedusaStore {
    //TODO add relations
    @OneToMany(() => User, (user) => user.store)
    @JoinColumn({ name: 'id', referencedColumnName: 'store_id' })
    members: User[];
}