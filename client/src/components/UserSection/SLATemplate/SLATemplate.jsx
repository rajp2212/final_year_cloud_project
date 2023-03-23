import React, { useState, useContext } from 'react'
import SLAForm from '../../SLA section/SLAForm'
import UserNav from '../UserNav/UserNav'
import './style1.css'
import { CircularProgress } from '@material-ui/core';
import { DataContext } from '../../SLAdata';
import { fetchData } from '../../../api';
import linguisticVal from '../../LinguisticValues';
import { Link } from 'react-router-dom';
const SLATemplate = () => {
	const { slaFormData } = useContext(DataContext);
	/* const GlobalState={data,setData} */
	const [basicModal1, setBasicModal1] = useState(true)
	const [newData, setnewData] = useState([])
	const getData = async () => {
		try {
			let val = await fetchData();
			/* console.log(val.data); */

			setnewData(val.data);
			
			/* setfinalList(sortedData) */

		} catch (error) {
			console.log(error);
		}
	}
	const toggleShow1 = () => {
		setBasicModal1(!basicModal1); /* console.log(slaFormData); */
		getData();



	};

	const Tw = (x, y) => { return x * y; }
	const IFw = (x, y) => { return (x + y - (x * y)); }
	let sortedData=[];

	const calculations = () => {
		let newSlaData = {
			c1: linguisticVal[slaFormData.cpu_capacity],
			c2: linguisticVal[slaFormData.memory_size],
			c3: linguisticVal[slaFormData.boot_time],
			c4: linguisticVal[slaFormData.scale_up],
			c5: linguisticVal[slaFormData.scale_down],
			c6: linguisticVal[slaFormData.scale_up_time],
			c7: linguisticVal[slaFormData.scale_down_time],
			c8: linguisticVal[slaFormData.max_vm_configure],
			c9: linguisticVal[slaFormData.auto_scaling],
			c10: linguisticVal[slaFormData.storage],
		}
		/* let newCsbData = {
			csbName, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10
		} */

		
		let Aplus = {
			/* T: -1, I: 5, F: 5 */
			c1:{T: -1, I: 5, F: 5} ,
			c2:{T: -1, I: 5, F: 5} ,
			c3:{T: -1, I: 5, F: 5} ,
			c4:{T: -1, I: 5, F: 5} ,
			c5:{T: -1, I: 5, F: 5} ,
			c6:{T: -1, I: 5, F: 5} ,
			c7:{T: -1, I: 5, F: 5} ,
			c8:{T: -1, I: 5, F: 5} ,
			c9:{T: -1, I: 5, F: 5} ,
			c10:{T: -1, I: 5, F: 5} ,
		}
		let Aminus = {
			/* T: 5, I: -1, F: -1 */
			c1:{T: 5, I: -1, F: -1} ,
			c2:{T: 5, I: -1, F: -1} ,
			c3:{T: 5, I: -1, F: -1} ,
			c4:{T: 5, I: -1, F: -1} ,
			c5:{T: 5, I: -1, F: -1} ,
			c6:{T: 5, I: -1, F: -1} ,
			c7:{T: 5, I: -1, F: -1} ,
			c8:{T: 5, I: -1, F: -1} ,
			c9:{T: 5, I: -1, F: -1} ,
			c10:{T: 5, I: -1, F: -1} ,
		}
		let table1 = newData.map((ele) => {
			let newCsbData = {
				_id:ele._id,
				csbName: ele.name,
				c1: linguisticVal[ele.cpu_capacity],
				c2: linguisticVal[ele.memory_size],
				c3: linguisticVal[ele.boot_time],
				c4: linguisticVal[ele.scale_up],
				c5: linguisticVal[ele.scale_down],
				c6: linguisticVal[ele.scale_up_time],
				c7: linguisticVal[ele.scale_down_time],
				c8: linguisticVal[ele.max_vm_configure],
				c9: linguisticVal[ele.auto_scaling],
				c10: linguisticVal[ele.storage],
			}
			return (newCsbData)

		})
		let table2 = table1.map((ele) => {
			let newCsbData = {
				_id:ele._id,
				csbName: ele.csbName,
				c1: {
					T: Tw(ele.c1.T, newSlaData.c1.T),
					I: IFw(ele.c1.I, newSlaData.c1.I),
					F: IFw(ele.c1.F, newSlaData.c1.F),
				},
				c2: {
					T: Tw(ele.c2.T, newSlaData.c2.T),
					I: IFw(ele.c2.I, newSlaData.c2.I),
					F: IFw(ele.c2.F, newSlaData.c2.F),
				},
				c3: {
					T: Tw(ele.c3.T, newSlaData.c3.T),
					I: IFw(ele.c3.I, newSlaData.c3.I),
					F: IFw(ele.c3.F, newSlaData.c3.F),
				},
				c4: {
					T: Tw(ele.c4.T, newSlaData.c4.T),
					I: IFw(ele.c4.I, newSlaData.c4.I),
					F: IFw(ele.c4.F, newSlaData.c4.F),
				},
				c5: {
					T: Tw(ele.c5.T, newSlaData.c5.T),
					I: IFw(ele.c5.I, newSlaData.c5.I),
					F: IFw(ele.c5.F, newSlaData.c5.F),
				},
				c6: {
					T: Tw(ele.c6.T, newSlaData.c6.T),
					I: IFw(ele.c6.I, newSlaData.c6.I),
					F: IFw(ele.c6.F, newSlaData.c6.F),
				},
				c7: {
					T: Tw(ele.c7.T, newSlaData.c7.T),
					I: IFw(ele.c7.I, newSlaData.c7.I),
					F: IFw(ele.c7.F, newSlaData.c7.F),
				},
				c8: {
					T: Tw(ele.c8.T, newSlaData.c8.T),
					I: IFw(ele.c8.I, newSlaData.c8.I),
					F: IFw(ele.c8.F, newSlaData.c8.F),
				},
				c9: {
					T: Tw(ele.c9.T, newSlaData.c9.T),
					I: IFw(ele.c1.I, newSlaData.c9.I),
					F: IFw(ele.c9.F, newSlaData.c9.F),
				},
				c10: {
					T: Tw(ele.c10.T, newSlaData.c10.T),
					I: IFw(ele.c10.I, newSlaData.c10.I),
					F: IFw(ele.c10.F, newSlaData.c10.F),
				},
			}
			for(let i=1;i<=10;i++){
			let a='c'+ i.toString();		
			Aplus[a].T=Math.max(newCsbData[a].T,Aplus[a].T);Aplus[a].I=Math.min(newCsbData[a].I,Aplus[a].I);Aplus[a].F=Math.min(newCsbData[a].F,Aplus[a].F);
			}
			for(let i=1;i<=10;i++){
			let a='c'+ i.toString();		
			Aminus[a].T=Math.min(newCsbData[a].T,Aminus[a].T);Aminus[a].I=Math.max(newCsbData[a].I,Aminus[a].I);Aminus[a].F=Math.max(newCsbData[a].F,Aminus[a].F);
			}
			return (newCsbData)
		})
		
		let finalTable=table2.map((table)=>{
			let Dplus=0,Dminus=0;
			for(let i=1;i<=10;i++){
				let idx='c'+ i.toString();
				let Tf=Math.abs(table[idx].T - Aplus[idx].T);
				let If=Math.abs(table[idx].I - Aplus[idx].I);
				let Ff=Math.abs(table[idx].F - Aplus[idx].F);
				Dplus=Dplus+(Tf+If+Ff);
	
				let Tfm=Math.abs(table[idx].T - Aminus[idx].T);
				let Ifm=Math.abs(table[idx].I - Aminus[idx].I);
				let Ffm=Math.abs(table[idx].F - Aminus[idx].F);
				Dminus=Dminus+(Tfm+Ifm+Ffm);
			}
			return {Dp:Dplus,Dm:Dminus,csbName:table.csbName,_id:table._id,}
		})
		
		let finalListDummy=finalTable.map((ele)=>{
			let Ci=ele.Dm/(ele.Dm + ele.Dp);
			return {Ci:Ci,csbName:ele.csbName,_id:ele._id,}
		})
		
		sortedData = finalListDummy.sort((a, b) => { return a.Ci < b.Ci; })
		
		console.log(sortedData);
		


	}
	return (
		<>
			<UserNav />
			<div class="sla_container">
				<SLAForm basicModal={basicModal1} setBasicModal={setBasicModal1} toggleShow={toggleShow1} />
				<header>
					<h1>Ranking by SLA Template</h1>
				</header>
				<div class="sla_wrapper">
					<table>
						<thead>
							<tr>
								<th>Rank</th>
								<th>CSP</th>
								<th>Percentage Mapping</th>

							</tr>
						</thead>
						<tbody>
							{!newData.length ? <CircularProgress /> : (calculations())}
							{


								!sortedData.length ? <CircularProgress /> : (
									sortedData.map((ele, idx) => {
										return (
											<>
												<tr>
													<td class="rank">{idx + 1}</td>
													<td class="team"><Link to={`/resource/${ele._id}`}>{ele.csbName}</Link ></td>
													<td class="points">{Math.floor(ele.Ci*100)} %</td>

												</tr>
											</>
										)
									})

								)}



						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default SLATemplate